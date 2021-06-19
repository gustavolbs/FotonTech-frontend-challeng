export const handleDispatchEvent = (event: string) => {
  const eventVar = new Event(event);
  document.dispatchEvent(eventVar);
};
