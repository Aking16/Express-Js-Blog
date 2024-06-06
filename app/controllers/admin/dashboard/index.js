const { totalMembers, totalPosts, totalComments, totalViews } = require('@models/admin/statistics');
const { findAll } = require('@models/admin/comments');

const index = async (req, res) => {
    const totalUsers = {
        countMembers: await totalMembers(),
        countPosts: await totalPosts(),
        countComments: await totalComments(),
        comments: await findAll(),
        countViews: await totalViews()
    }
    res.adminRender('admin/dashboard', { ...totalUsers });
}

module.exports = index
