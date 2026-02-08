const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

const API_URL = 'http://localhost:5000/api';
const IMAGE_PATH = path.join(__dirname, '..', 'Frontend', 'public', 'members', 'ashu.jpg');

async function testSankalpEvent() {
    console.log('--- Testing SankalpEvent ---');
    const form = new FormData();
    form.append('name', 'Sankalp 2026 Test');
    form.append('date', '2026-02-15');
    form.append('time', '10:00 AM');
    form.append('vanue', 'Main Hall');
    form.append('rules', 'Be on time');
    form.append('status', 'upcoming');

    if (fs.existsSync(IMAGE_PATH)) {
        form.append('bannerImg', fs.createReadStream(IMAGE_PATH));
    }

    try {
        const response = await axios.post(`${API_URL}/sankalpevent`, form, {
            headers: form.getHeaders()
        });
        console.log('SankalpEvent POST Success:', response.data);
        return response.data._id;
    } catch (error) {
        console.error('SankalpEvent POST Error:', error.response ? error.response.data : error.message);
    }
}

async function testEvent() {
    console.log('\n--- Testing Event ---');
    const form = new FormData();
    form.append('name', 'Event Test');
    form.append('description', 'Description of test event');
    form.append('date', '2026-03-01');
    form.append('time', '2:00 PM');
    form.append('rules', 'Rules here');
    form.append('status', 'upcoming');

    if (fs.existsSync(IMAGE_PATH)) {
        form.append('photos', fs.createReadStream(IMAGE_PATH));
        // Add another photo if possible
        form.append('photos', fs.createReadStream(IMAGE_PATH));
    }

    try {
        const response = await axios.post(`${API_URL}/event`, form, {
            headers: form.getHeaders()
        });
        console.log('Event POST Success:', response.data);
        return response.data._id;
    } catch (error) {
        console.error('Event POST Error:', error.response ? error.response.data : error.message);
    }
}

async function testMember() {
    console.log('\n--- Testing Member ---');
    const form = new FormData();
    form.append('name', 'John Doe Test');
    form.append('role', 'Developer');
    form.append('category', 'member');
    form.append('linkedin', 'https://linkedin.com/in/johndoe');

    if (fs.existsSync(IMAGE_PATH)) {
        form.append('img', fs.createReadStream(IMAGE_PATH));
    }

    try {
        const response = await axios.post(`${API_URL}/members`, form, {
            headers: form.getHeaders()
        });
        console.log('Member POST Success:', response.data);
        return response.data._id;
    } catch (error) {
        console.error('Member POST Error:', error.response ? error.response.data : error.message);
    }
}

async function runTests() {
    try {
        const sankalpId = await testSankalpEvent();
        const eventId = await testEvent();
        const memberId = await testMember();

        console.log('\nTests completed.');
    } catch (error) {
        console.error('Global Error:', error);
    }
}

runTests();
