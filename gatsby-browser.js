export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `Hello there, this page has been updated. ` +
        `Reload to display the latest content - Thank you !`
    )
  
    if (answer === true) {
      window.location.reload()
    }
  }