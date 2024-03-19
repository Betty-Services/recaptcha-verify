const verifyRecaptcha = async ({ token, secret }) => {
    const fetchResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        formData: [
            { key: 'secret', value: secret },
            { key: 'response', value: token },
        ],
    });
    const response = await fetchResponse.json();
    return { response, success: response.success };
};
export default verifyRecaptcha;
