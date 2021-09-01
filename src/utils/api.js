class Api {

    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._handleResponse);
    };
    
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._handleResponse);
    };

    setUserInfo(profileName, profileDescription) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: profileName,
                about: profileDescription
            })
        }     
        )
        .then(this._handleResponse);
    };

    setCard(cardName, cardLink) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardName,
                link: cardLink
            })     
        })
            .then(this._handleResponse);
    };

    changeLikeCardStatus(cardId, isLiked) {
        if (!isLiked) {
            return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                method: 'PUT',
                headers: this._headers
            })
                .then(this._handleResponse);
            }
        else {
            return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                method: 'DELETE',
                headers: this._headers
            })
                .then(this._handleResponse);
        }
    };

    setNewAvatar(avatarUrl) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarUrl
            })
        })
        .then(this._handleResponse);
    };

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._handleResponse);
    };

    _handleResponse(res) {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      }

}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
    headers: {
    authorization: 'eab1c7c5-9c80-49c5-90ac-896bf5cee6a9',
    'Content-Type': 'application/json'
    }
});

export default api;