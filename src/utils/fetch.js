import axios from 'axios'

export const fetch = async (name) => {

    const { data } = await axios.post('https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
        prompt: `generate a ${name} fan theory in less than 200 words`,
        max_tokens: 2048,
        temperature: 0.8
    }, {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        }
    })
    // console.log(response)
    return data
}