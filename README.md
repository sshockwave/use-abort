# use-abort

A React hook that uses AbortController for cancellable side effects.

Example:

```js
function MyComponent() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useAbort((signal) => {
    // The listener will be removed when the component is unmounted.
    window.addEventListener('resize', () => {
      setViewportWidth(window.innerWidth);
    }, { signal });
  });
  // ...
}
```

<a href="https://caniuse.com/abortcontroller">
<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/image/abortcontroller.webp">
<source type="image/png" srcset="https://caniuse.bitsofco.de/image/abortcontroller.png">
<img src="https://caniuse.bitsofco.de/image/abortcontroller.jpg" alt="Data on support for the abortcontroller feature across the major browsers from caniuse.com">
</picture>
</a>

Related projects:

- [closeio/use-abortable-effect](https://github.com/closeio/use-abortable-effect)
- [kiliancs/react-hook-abortable-effect](https://github.com/kiliancs/react-hook-abortable-effect)
