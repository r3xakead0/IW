import User from "../models/User";
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
    }
}

export async function createUser(req, res) {
    const { name, password, fullname, email, profileid, active } = req.body;
    const createddate = Date.now();
    try {
        let newUser = await User.create({
            name,
            password,
            fullname,
            email,
            profileid,
            active,
            createddate
        }, {
            fields: ['name', 'password', 'fullname', 'email', 'profileid', 'active', 'createddate']
        });
        if (newUser) {
            return res.json({
                message: 'User created successfully',
                user: newUser
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
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
        res.status(500).json({
            message: 'Something goes wrong',
            data: { e }
        });
    }
}

export async function updateUser(req, res) {
    const { id } = req.params;
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
        });
    }
}