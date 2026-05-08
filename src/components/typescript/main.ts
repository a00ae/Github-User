

const a:HTMLElement | null = document.querySelector("a");

if (a) {
  a.onclick = (e: MouseEvent) => {
    e.preventDefault();
  };
}
