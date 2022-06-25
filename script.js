window.onload = function takeJson() {
    document.querySelector('#resultSearch').innerHTML = ''
  
    var url = 'https://profrodolfo.com.br/projeto/'
    fetch(url)
      .then(resposta => {
        return resposta.json()
      })
      .then(function (json) {
        var d = document.querySelector('.produtos')
        var texto = ''
        for (i = 0; i < json.length; i++) {
          texto += '<div class="row">'
          texto += '<div class="col-4 ">'
          texto +=
            '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/' +
            json[i].foto +
            '">'
          texto += '</div>'
          texto += '<div class="col-">'
          texto += '<h1>' + json[i].nome + '</h1>'
          texto += '<h3>' + json[i].valor + '</h3>'
          texto += '</div>'
          texto += '</div>'
        }
        d.innerHTML += texto
      })
      .catch()
  }
  function searchBar() {
    document.querySelector('.produtos').innerHTML = ''
    document.querySelector('#resultSearch').innerHTML = ''
  
    let pesquisa = document.querySelector('#searchString').value
    let pesquisaVl = document.querySelector('#searchValue').value
  
    var urlName = 'https://profrodolfo.com.br/projeto/?nome=' + pesquisa
    var urlValor = 'https://profrodolfo.com.br/projeto/?valor=' + pesquisaVl
    var urlDuo =
      'https://profrodolfo.com.br/projeto/?nome=' +
      pesquisa +
      '&?valor=' +
      pesquisaVl
  
    if (pesquisa != '') {
      fetch(urlName)
        .then(resposta => {
          return resposta.json()
        })
        .then(function (json) {
          var d = document.querySelector('#resultSearch')
          var texto = ''
          for (i = 0; i < json.length; i++) {
            texto += '<div class="row">'
            texto += '<div class="col-4 ">'
            texto +=
              '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/' +
              json[i].foto +
              '">'
            texto += '</div>'
            texto += '<div class="col-">'
            texto += '<h1>' + json[i].nome + '</h1>'
            texto += '<h3>' + json[i].valor + '</h3>'
            texto += '</div>'
            texto += '</div>'
          }
          d.innerHTML += texto
        })
        .catch()
    } else {
    }
    if (pesquisaVl != '') {
      fetch(urlValor)
        .then(resposta => {
          return resposta.json()
        })
        .then(function (json) {
          var d = document.querySelector('#resultSearch')
          var texto = ''
          for (i = 0; i < json.length; i++) {
            texto += '<div class="row">'
            texto += '<div class="col-4 ">'
            texto +=
              '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/' +
              json[i].foto +
              '">'
            texto += '</div>'
            texto += '<div class="col-">'
            texto += '<h1>' + json[i].nome + '</h1>'
            texto += '<h3>' + json[i].valor + '</h3>'
            texto += '</div>'
            texto += '</div>'
          }
          d.innerHTML += texto
        })
        .catch()
    } else {
    }
    if (pesquisa != '' && pesquisaVl != '') {
      fetch(urlDuo)
        .then(resposta => {
          return resposta.json()
        })
        .then(function (json) {
          var d = document.querySelector('#resultSearch')
          var texto = ''
          for (i = 0; i < json.length; i++) {
            texto += '<div class="row">'
            texto += '<div class="col-4 ">'
            texto +=
              '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/' +
              json[i].foto +
              '">'
            texto += '</div>'
            texto += '<div class="col-">'
            texto += '<h1>' + json[i].nome + '</h1>'
            texto += '<h3>' + json[i].valor + '</h3>'
            texto += '</div>'
            texto += '</div>'
          }
          d.innerHTML += texto
        })
        .catch()
    }
  }
  function home() {
    document.querySelector('.produtos').innerHTML = ''
    document.querySelector('#resultSearch').innerHTML = ''
  
    var url = 'https://profrodolfo.com.br/projeto/'
    fetch(url)
      .then(resposta => {
        return resposta.json()
      })
      .then(function (json) {
        var d = document.querySelector('.produtos')
        var texto = ''
        for (i = 0; i < json.length; i++) {
          texto += '<div class="row">'
          texto += '<div class="col-4 ">'
          texto +=
            '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/' +
            json[i].foto +
            '">'
          texto += '</div>'
          texto += '<div class="col-">'
          texto += '<h1>' + json[i].nome + '</h1>'
          texto += '<h3>' + json[i].valor + '</h3>'
          texto += '</div>'
          texto += '</div>'
        }
        d.innerHTML += texto
      })
      .catch()
  }