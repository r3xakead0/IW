import Profile from "../models/Profile";

export async function getProfiles(req, res) {
    try {
        const profiles = await Profile.findAll();
        res.json({
            profiles
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getOneProfile(req, res) {
    try {
        const { id } = req.params;
        const profile = await Profile.findOne({
            where: {
                id
            }
        });
        res.json({
            profile
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createProfile(req, res) {
    const { name, description, active } = req.body;
    const createddate =  Date.now();
    try {
        let newProfile = await Profile.create({
            name,
            description,
            active,
            createddate
        }, {
            fields: ['name', 'description', 'active', 'createddate']
        });
        if (newProfile) {
            return res.json({
                message: 'Profile created successfully',
                profile: newProfile
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function deleteProfile(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Profile.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Profile deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateProfile(req, res) {
    const { id } = req.params;
    const { name, description, active } = req.body;
    const updateddate =  Date.now();
    try {

        const Profiles = await Profile.findAll({
            attributes: ['id', 'name', 'description', 'active', 'updateddate'],
            where: {
                id
            }
        });

        if (Profiles.length > 0) {
            Profiles.forEach(async Profile => {
                await Profile.update({
                    name,
                    description,
                    active,
                    updateddate
                });
            });
        }

        return res.json({
            message: 'Profile updated successfully',
            data: Profiles
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}