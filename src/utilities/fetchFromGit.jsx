import {useState} from 'react';

export default async function fetchAllRepositories() {
    try {
        const response = await fetch("https://api.github.com/users/kasej01/repos");
        const data = await response.json();

        return data;
    }
    catch (error){
        console.error("Error: ", error);
        return [];
    }
}