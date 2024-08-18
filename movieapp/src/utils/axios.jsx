import axios from 'axios'

const instance = axios.create({
    baseURL :"https://api.themoviedb.org/3",
    headers:{
        accept:"application/json",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTQxNTU1N2FkYzFhMmI4MDE5MGNlM2M3MjQwMjllNyIsIm5iZiI6MTcyMzk2NjY5Ny45MzcxNTEsInN1YiI6IjY2YzBkYzRhYTc3YzM3YjQyOGQ1MmIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X256yi_dN95HSPK3S_jomqos_xqlvcklHvlECrXQCic"
    }
})

export default instance