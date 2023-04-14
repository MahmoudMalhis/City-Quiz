export function disable(el) {
  el.disabled = true;
}

export function enable(el) {
  el.disabled = false;
}

export function hide(el) {
  el.style.display = "none";
}

export function show(el) {
  el.style.display = "";
}

export function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "istanbul") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 1500);
  });
}
