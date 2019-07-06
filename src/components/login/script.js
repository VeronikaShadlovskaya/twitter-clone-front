        var front = document.getElementById('flipthis'),
      back_content =
      `
      <form class="form-reset">
        <p class="text-center">Введите адрес электронной почты, и мы отправим вам электронное письмо, для восстановления доступа.</p>
        <div class="form-label-group">
          <input type="email" id="resetEmail" class="form-control" placeholder="Email address" required="" autofocus="">
          <label for="resetEmail">Email Адрес</label>
        </div>

        <div class="text-center">
          <button id="closeCard" class="btn btn-danger btn-block btn-lg" type="submit">Получить код востановления</button>
        </div>

      </form>`,
      back
    document.getElementById("flipCard").addEventListener('click', function (e) {
      back = flippant.flip(front, back_content, 'card', 'flippant-modal-light')
      document.getElementById("flipCard").classList.add('hidden');
      document.getElementById("flipReg").classList.add('hidden');
      // document.getElementById("greeting").classList.add('hidden');
      // document.getElementById("logo").classList.add('hidden');

      document.getElementById("closeCard").addEventListener('click', function (e) {
        back = back.close();
        document.getElementById("flipCard").classList.remove('hidden');
        document.getElementById("logo").classList.remove('hidden');
        // document.getElementById("greeting").classList.remove('hidden');
        // document.getElementById("greeting").innerHTML = 'got your reset email yet ? ';
      })
    })
    
  