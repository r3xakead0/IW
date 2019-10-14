import User from "../models/User";

export async function getUsers(req, res) {
    try {
        const Users = await User.findAll();
        res.json({
            data: Users
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createUser(req, res) {
    const { name, password, fullname, email, profileId, active } = req.body;
    const createddate =  Date.now();
    try {
        let newUser = await User.create({
            name,
            password,
            fullname,
            email,
            profileId,
            active,
            createddate
        }, {
            fields: ['name', 'password', 'fullname', 'email', 'profileId', 'active', 'createddate']
        });
        if (newUser) {
            return res.json({
                message: 'User created successfully',
                data: newUser
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

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
        console.log(e);
    }
}

export async function updateUser(req, res) {
    const { id } = req.params;
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
        });
    }
}