# NGTQ
NGTQ is a trait-based abstraction layer for task queues in Rust, enabling seamless switching between different task queue implementations without changing your application code.

## Features

- Thread-safe task queue interface
- Support for both ID-based and category-based queues
- Standardized error handling
- Easily swappable queue implementations

## Coming Soon

- Flash queues for ultra-high priority tasks
- Queue recovery mechanisms
- Async method support
- Additional utility helpers

## Installation

Add NGTQ to your `Cargo.toml`:

```toml
[dependencies]
ngtq = "0.1.0"
```

## Application Patterns

NGTQ can be used in different architectural patterns:

1. **Message Bus/Service** - Use NGTQ as the core domain of a dedicated message bus service that other services communicate with
2. **Monolithic Integration** - Embed NGTQ directly in your monolithic application for internal task management
3. **Distributed Systems** - Use NGTQ-compatible implementations to standardize task queuing across microservices

## How It Works

NGTQ defines a trait that any task queue implementation must satisfy. This standardizes:

1. **Initialization** - Creates a thread-safe instance of the queue
2. **Queue operations** - Standard methods for pushing and pulling tasks
3. **Queue inspection** - Methods to check queue sizes
4. **Error handling** - Consistent error types and reporting

## Compatible Implementations

| Crate | Description | Github Repo |
|----------|----------|----------|
| ngtask_queue_basic | Basic implementation using in memory queues | https://github.com/NGDeveloper125/NGTaskQueue_Basic |

## Why Use NGTQ?

- **Decoupling**: Your application logic remains separate from specific queue implementations
- **Flexibility**: Switch between different queue backends without changing application code
- **Standardization**: Consistent interface regardless of the underlying queue technology
- **Thread safety**: Built-in concurrency support with Arc<Mutex<>> pattern

## Error Handling

NGTQ provides a standardized error type `NGTQError` with categorized error types:

- `Initialisation` - Errors during queue setup
- `IdQueue` - Errors related to ID-based queue operations
- `CategoryQueue` - Errors related to category-based queue operations
- `Serialisation` - Errors during data serialization/deserialization
- `ServerError` - Unexpected server or backend errors

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.