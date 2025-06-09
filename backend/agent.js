// File: /backend/agent.js

const elAgente = {
    run: async (message) => {
      try {
        console.log(`Processing message: ${message}`);
        const response = `You said: "${message}". How can I assist you further?`;
        return response;
      } catch (error) {
        console.error('Error in agent:', error);
        throw new Error('Agent failed to process the message');
      }
    },
  };
  
  export default elAgente; // Export elAgente as the default export