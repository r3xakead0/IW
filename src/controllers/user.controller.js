import User from "../models/User";
<<<<<<< HEAD
import Profile from "../models/Profile";

export async function getUsers(req, res) {
    try {
        const page  = req.query.page || 1;
        const pageSize = 10;

        const offset = (page - 1) * pageSize;
        const limit = offset + pageSize;
        const totalRows = await User.count();
        
        const pageCount = Math.ceil(totalRows / pageSize);

        const users = await User.findAll({
            limit,
            offset,
            attributes: ['id', 'name', 'fullname', 'email', 'profileid', 'active'],
            order: [
                ['id', 'ASC']
            ],
            include: [{
                model: Profile,
                attributes: ['name'],
            }]
        });
        res.json({
            users,
            pagination: {
                page,
                limit,
                totalRows,
                pageCount: pageCount
            }
        });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function getOneUser(req, res) {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            attributes: ['id', 'name', 'fullname', 'email', 'profileid', 'active'],
            where: { id },
            include: [{
                model: Profile,
                attributes: ['name'],
            }]
        });
        res.json({
            user
        });
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
=======

export async function getUsers(req, res) {
    try {
        const Users = await User.findAll();
        res.json({
            data: Users
        });
    } catch (e) {
        console.log(e);
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
    }
}

export async function createUser(req, res) {
<<<<<<< HEAD
    const { name, password, fullname, email, profileid, active } = req.body;
    const createddate = Date.now();
=======
    const { name, password, fullname, email, profileId, active } = req.body;
    const createddate =  Date.now();
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
    try {
        let newUser = await User.create({
            name,
            password,
            fullname,
            email,
<<<<<<< HEAD
            profileid,
            active,
            createddate
        }, {
            fields: ['name', 'password', 'fullname', 'email', 'profileid', 'active', 'createddate']
=======
            profileId,
            active,
            createddate
        }, {
            fields: ['name', 'password', 'fullname', 'email', 'profileId', 'active', 'createddate']
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
        });
        if (newUser) {
            return res.json({
                message: 'User created successfully',
<<<<<<< HEAD
                user: newUser
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
=======
                data: newUser
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
        });
    }
}

<<<<<<< HEAD
=======
export async function getOneUser(req, res) {
    try {
        const { id } = req.params;
        const User = await User.findOne({
            where: {
                id
            }
        });
        res.json({
            data: User
        });
    } catch (e) {
        console.log(e);
    }
}

>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
export async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await User.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'User deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
<<<<<<< HEAD
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
=======
        console.log(e);
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
    }
}

export async function updateUser(req, res) {
    const { id } = req.params;
<<<<<<< HEAD
    const { name, password, fullname, email, profileid, active } = req.body;
    const updateddate = Date.now();
    try {

        const updateRowCount = await User.update({
                                        name,
                                        password,
                                        fullname,
                                        email,
                                        profileid,
                                        active,
                                        updateddate
                                    },
                                    {
                                        where: { id }
                                    }
                            );

        return res.json({
            message: 'User updated successfully',
            count: updateRowCount
        });

    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
=======
    const { name, password, fullname, email, profileId, active } = req.body;
    const updateddate =  Date.now();
    try {

        const Users = await User.findAll({
            attributes: ['id', 'name', 'password', 'fullname', 'email', 'profileId', 'active', 'updateddate'],
            where: {
                id
            }
        });

        if (Users.length > 0) {
            Users.forEach(async User => {
                await User.update({
                    name,
                    password,
                    fullname,
                    email,
                    profileId,
                    active,
                    updateddate
                });
            });
        }

        return res.json({
            message: 'User updated successfully',
            data: Users
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c
        });
    }
}