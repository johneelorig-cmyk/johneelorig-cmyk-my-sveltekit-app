# johneelorig-cmyk-my-sveltekit-app

A SvelteKit application with Vitest testing framework.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Testing

This project uses [Vitest](https://vitest.dev/) for unit testing and [@testing-library/svelte](https://testing-library.com/docs/svelte-testing-library/intro/) for component testing.

### Run Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Test Coverage

The project includes sample tests for the Counter component located at:
- Component: `src/lib/components/Counter.svelte`
- Tests: `src/lib/components/Counter.test.js`

The test suite covers:
- Initial rendering with default and custom count values
- Increment functionality
- Decrement functionality
- Reset functionality
- Button presence verification
