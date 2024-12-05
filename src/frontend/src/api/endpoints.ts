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

  let url;

  if (withPatologies) {
    const data = await getPatologies(true)
    patologies_ids = data.map(el => el.patology_id);
    const query = patologies_ids.join('&patologies_ids=');
    url = `/exercises?patologies_ids=${query}`
  } else {
    patologies_ids = null;
    url = "/exercises"
  }

  const resp = await api.get(url,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
   }
  )

  return resp.data.data;
}


async function getDocuments() {
  const user_id = localStorage.getItem("uid");

  const resp = await api.get('/documents', {
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

async function addDocument(file: File, name: string) {  
  const user_id = localStorage.getItem("uid");

  var data = new FormData();
  data.append('file', file);

  await api.post("/documents", 
   data,
    {
      params: {
        user_id: user_id,
        name: name,
      },
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      }
    }
  )
}

async function updateProfile(fio: string, group: string) {
  const user_id = localStorage.getItem("uid");

  await api.put("/profile", {}, {
    params: {
      user_id: user_id,
      fio: fio,
      group: group
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}


async function deleteData(data_id: string, data_kind: string) { 
  let url;

  if (data_kind === 'doc') {
    url = `/documents/${data_id}`
  } else {
    url = `/patologies/${data_id}`
  }

  await api.delete(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
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
  updateProfile,
  deleteData,
};
