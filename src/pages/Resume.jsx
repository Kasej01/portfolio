import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/pages/resume.css';
import * as PDFJS from 'pdfjs-dist';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Set up PDF.js worker
PDFJS.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs";

export default function Resume() {
    const canvasRef = useRef(null);
    const [pdfDoc, setPdfDoc] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/KaseJohnson-Resume.pdf';
        link.download = 'Kase_Johnson-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const renderPage = useCallback((pageNum, pdf = pdfDoc) => {
        const canvas = canvasRef.current;
        if (!canvas || !pdf) return;
        canvas.height = 0;
        canvas.width = 0;
        pdf.getPage(pageNum).then((page) => {
            const viewport = page.getViewport({ scale: 1.5 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderContext = {
                canvasContext: canvas.getContext("2d"),
                viewport: viewport,
            };
            page.render(renderContext);
        }).catch((error) => console.log(error));
    }, [pdfDoc]);

    useEffect(() => {
        renderPage(currentPage, pdfDoc);
    }, [pdfDoc, currentPage, renderPage]);

    useEffect(() => {
        const loadingTask = PDFJS.getDocument("/KaseJohnson-Resume.pdf");
        loadingTask.promise.then(
            (loadedDoc) => {
                setPdfDoc(loadedDoc);
            },
            (error) => {
                console.error(error);
            }
        );
    }, []);

    const nextPage = () => pdfDoc && currentPage < pdfDoc.numPages && setCurrentPage(currentPage + 1);
    const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

    return (
        <div id="resume-container" className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <h1 className="title">My Resume</h1>
            <div className="bg-white p-4 rounded-2xl shadow-lg w-full max-w-4xl">
                <canvas ref={canvasRef} className="resume-canvas border rounded-md" />
                <p className="text-center mt-2">Page {currentPage} of {pdfDoc?.numPages || '?'}</p>
                <div className="flex justify-center gap-4 mt-4">
                    <button 
                        onClick={prevPage} 
                        disabled={currentPage <= 1}
                        className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-500 transition disabled:opacity-50"
                    >Previous</button>
                    <button 
                        onClick={nextPage} 
                        disabled={currentPage >= (pdfDoc?.numPages ?? -1)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition disabled:opacity-50"
                    >Next</button>
                </div>
            </div>
            <button 
                onClick={handleDownload}
                className="resume-button mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            >Download PDF Resume</button>
        </div>
    );
}