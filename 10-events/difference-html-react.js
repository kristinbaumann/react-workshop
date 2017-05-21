// Reference: https://facebook.github.io/react/docs/handling-events.html
// HTML
<button onclick="activateLasers()">
  Activate Lasers
</button>


// React 
<button onClick={(event) => activateLasers(event)}>
  Activate Lasers
</button>
