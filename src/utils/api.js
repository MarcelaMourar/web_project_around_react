class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _request(endpoint, options = {}) {
    return fetch(`${this._baseUrl}${endpoint}`, {
      headers: this._headers,
      ...options,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Erro: ${res.status}`);
        return res.json();
      });
  }

  getUserInfo() {
    return this._request('/users/me');
  }

  setUserInfo(data) {
    return this._request('/users/me', {
      method: 'PATCH',
      body: JSON.stringify({ name: data.name, about: data.about }),
    });
  }

  setUserAvatar(data) {
    return this._request('/users/me/avatar', {
      method: 'PATCH',
      body: JSON.stringify({ avatar: data.avatar }),
    });
  }

  getInitialCards() {
    return this._request('/cards');
  }

  createCard(data) {
    return this._request('/cards', {
      method: 'POST',
      body: JSON.stringify({ name: data.name, link: data.link }),
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, { method: 'DELETE' });
  }

  likeCard(cardId) {
   return this._request(`/cards/${cardId}/likes`, { method: 'PUT' });
  }
  
changeLikeCardStatus(cardId, isLiked) {
   return this._request(`/cards/${cardId}/likes`, {
    method: isLiked ? "PUT" : "DELETE",
  });
}
  unlikeCard(cardId) {
    return this._request(`/cards/${cardId}/likes`, { method: 'DELETE' });
  }
}

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "a9ff003e-7f3e-47b6-b5e9-4b1090a76fb5",
    "Content-Type": "application/json",
  },
});

export default api;
