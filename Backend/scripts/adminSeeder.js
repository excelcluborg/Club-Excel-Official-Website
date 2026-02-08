require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB for seeding...');

        const adminEmail = 'clubexcelofficial@gmail.com';
        const existingAdmin = await User.findOne({ email: adminEmail });

        if (existingAdmin) {
            console.log('Admin user already exists. Updating password...');
            const salt = await bcrypt.genSalt(10);
            existingAdmin.password = await bcrypt.hash('ClubExcelOrgAdmin', salt);
            existingAdmin.name = 'club excel';
            existingAdmin.role = 'admin';
            await existingAdmin.save();
            console.log('Admin user updated successfully.');
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('ClubExcelOrgAdmin', salt);

            const adminUser = new User({
                name: 'club excel',
                email: adminEmail,
                password: hashedPassword,
                role: 'admin'
            });

            await adminUser.save();
            console.log('Admin user created successfully.');
        }

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('Error seeding admin user:', error);
        process.exit(1);
    }
};

seedAdmin();
