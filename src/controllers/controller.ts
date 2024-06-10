// Define the type for the notifier function. It takes a function as an argument, 
// which itself takes an argument of type T and returns a value of type T.
type Notifier<T> = (callback: (prev: T) => T) => void;

// Define a generic Controller class.
export class Controller<T> {
  protected notifier: Notifier<T>;
  protected listener: T;

  // The constructor initializes the notifier and listener, and then calls notifyListener.
  constructor(notifier: Notifier<T>,listener:T) {
    this.notifier = notifier;
    this.listener = listener;
    this.notifyListener()
  }

  // This method calls the notifier function with a callback that returns the current listener state.
  protected notifyListener(): void {
    this.notifier((prev: T) => ({ ...this.listener }));
  }
}
