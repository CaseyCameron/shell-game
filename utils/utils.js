export function resetShells(containers) {
    containers.map((container) => container.classList.remove('reveal'));
}

export function revealBall(containers, answer) {
    containers.map((container) => {
        if (container.id === `${answer}`) container.classList.toggle('reveal');
    });
}
