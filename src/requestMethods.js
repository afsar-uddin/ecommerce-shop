import axios from 'axios';

const base_url = "http://localhost:4000/api";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzFjMjY4Njg2MDY3NmFkYTU5OTI4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDIzNTU1MiwiZXhwIjoxNjQwNDk0NzUyfQ.ZUa1XMVGJWth_QYp1nyyuJBgArBSEGnwThRxnpFp-xc";

export const publicRequest = axios.create({
    baseURL: base_url
});

export const userRequest = axios.create({
    baseURL: base_url,
    header: { token: `Bearer ${token}` }
}); 
