const textarea = document.querySelectorAll('[data-authoresize]');

textarea.forEach((item) => {
    item.addEventListener('input', (event) => {
        let $this = event.currentTarget;

        $this.style.height = '30px';
        $this.style.height = $this.scrollHeight + 'px';
    })
})