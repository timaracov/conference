import axios from 'axios';
import { baseURL } from './config';

const api = axios.create({
  baseURL: baseURL
});


async function register(login: string, password_plain: string, fullname: string, group: string) {
  await api.post("/profile/register", {}, {
    params: {
      login: login,
      passwd_plain: password_plain,
      fullname: fullname,
      group: group,
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}


async function login(login: string, password: string) {
  const resp = await api.post("/profile/login",{}, {
    params: {
      login: login,
      password: password,
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })  

  const user_id = resp.data.user.user_id

  localStorage.setItem("uid", user_id)

  return resp.data.user
}


async function getProfile() {
  const user_id = localStorage.getItem("uid");

  const resp = await api.get("/profile", {
    params: {
      user_id: user_id
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })

  return resp.data.user;
}


async function getPatologies(forUser: boolean = false) : Promise<any []> {
  const user_id = forUser ? localStorage.getItem("uid") : null

  const resp = await api.get("/patologies", {
    params: {
      user_id: user_id,
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })

  return resp.data.data
}


async function getExercises(withPatologies: boolean = false) {
  let patologies_ids;

  if (withPatologies) {
    const data = await getPatologies(true)
    patologies_ids = data.map(el => el.patology_id);
  } else {
    patologies_ids = null;
  }

  const resp = await api.get("/profile", {
    params: {
      patologies_ids: patologies_ids,
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })

  return resp.data.data;
}


async function getDocuments() {
  const user_id = localStorage.getItem("uid");

  return await api.get('/documents', {
    params: {
      user_id: user_id,
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}


async function addPatology(name: string, level: Number) {
  const user_id = localStorage.getItem("uid");

  await api.post("/patologies", {}, {
    params: {
      user_id: user_id,
      name: name,
      level: level,
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}

async function addDocument() {  
  // fuck my ass
}


export default {
  register,
  login,
  getProfile,
  getPatologies,
  getExercises,
  getDocuments,
  addPatology,
  addDocument,
};
