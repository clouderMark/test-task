export const sendFeedbackForm = async (data) =>
  await fetch('http://localhost:9090/api/registration', {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data,
  });
