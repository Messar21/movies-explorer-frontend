function MovieTimer (timer) {
     if (timer > 60) {
          return `${ Math.floor(timer / 60) }ч ${ timer % 60 }м`
     } else {
          return `${ timer } минут`
     }
}

export default MovieTimer;
