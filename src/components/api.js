import axios from 'axios';

const apiUrl = 'https://www.scorebat.com/video-api/v3/feed/?token=ODI1ODhfMTY4MzQwNTM5MV84YjlhMzQzYjQ5MDhhNDgzZjEwNzA1MzBmOTY5YzI3ZjE1NDBjYTkz';

const getMatches = async () => {
  const response = await axios.get(apiUrl);
  return response.data.response;
};

export default { getMatches };
