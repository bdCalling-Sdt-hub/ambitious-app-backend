import colors from 'colors';
import { User } from '../app/modules/user/user.model';
import config from '../config';
import { USER_ROLES } from '../enums/user';
import { logger } from '../shared/logger';
import { Visitor } from '../app/modules/visitor/visitor.model';

const superUser = {
    name: 'Ding Wei Glenn',
    role: USER_ROLES.SUPER_ADMIN,
    email: config.admin.email,
    password: config.admin.password,
    verified: true,
};

const seedSuperAdmin = async () => {
    const isExistSuperAdmin = await User.findOne({
        role: USER_ROLES.SUPER_ADMIN,
    });

    if (!isExistSuperAdmin) {
        await User.create(superUser);
        logger.info(colors.green('✔ Super admin created successfully!'));
    }
};

export const insertVisitorInDB = async (ip: string)=> {
    const visitor = await Visitor.findOne({ ip: ip });
    if (!visitor) {
        await Visitor.create({ip: ip});
    }
};
 

export default seedSuperAdmin;