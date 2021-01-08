import axios from "axios";

const key = "19312223-5ce613f0baa18ae84872c00fc";

export function fetchImagesByQuerry(querry, page = 1) {
  return axios.get(`https://pixabay.com/api/?q=${querry}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12
`).then((res) => res.data.hits)
}
