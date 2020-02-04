const db = require('../database/db-Config');
module.exports = {
    add,
    find,
    findById,
    update,
    remove
};

// tbl.string('position_name').notNullable();
// 			tbl.string('type').notNullable();
// 			tbl.string('job_bio').notNullable();
// 			tbl.string('duration').notNullable();
// 			tbl.integer('company_id')
// MARK: -- Add Skill to hunter
async function add(id, jobSkill) {
    //let user_id = db('users').where('id', id).select('id').first();
    return db('job_skills').insert({ "name": jobSkill.name, "job_id": id })
        .then(() => {
            return db('job_skills').where("job_id", id)
        })
}
// MARK: -- Find all skills for job
function find(companyId, job_id) {
    return db('job_skills')
        .where('job_id', job_id)
}
// MARK: -- Find skill by skill id
function findById(id) {
    return db('job_skills').where('id', id).first();
}

// MARK: -- Update
async function update(id, skill) {
    return await db('job_skills')
        .where('id', id)
        .update({ "name": skill.name })
        .then(() => {
            return db('job_skills').where('id', id).first();
        })
}
// MARK: -- Delete
async function remove(id) {
    return await db('job_skills').where('id', id).del()
}