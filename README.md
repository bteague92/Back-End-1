# Back-End API Doc

## BASE URL : `https://droom-bt-tl.herokuapp.com`

## Registration For Job Seeker

**Auth required** : NO

* [Register] : `POST /api/auth/register`

**Data Example**

```json
{
	"email": "bigby@example.com",
	"password": "yourpasswordhere",
	"name": "your-full-name",
	"location": "City-or-town"
}
```
# Success Response

**Code** : `201 CREATED`

```json
{
	"email": "bigby@example.com",
	"password": "your-password-will-be-salted-and-hashed-for-security"
}
```

# Error Response

**Condition** : If 'email' and 'password' combination is wrong

```json
{
 	"message": "error..."
}
```

## Login

**Auth required** : NO

* [Login] : `POST /api/auth/login`

**Data Example**

```json
{
	"email": "bigby@example.com",
	"password": "yourpasswordhere"
}
```

## Success Response

**Code** : `200 OK`

```json
{
	"token": "tokenwillbereallylongandhaverandomcharactes"
}
```

## Error Response

**Condition** : If 'email' and 'password' combination is wrong

**Code** : `400 Bad Request`

```json
{
 	"message": "error...with specified error message"
}
```

## Registration For Company

**Auth required** : NO

* [Register] : `POST /api/auth/company/register`

**Data Example**

```json
{
	"email": "bigby@example.com",
	"password": "yourpasswordhere",
	"name": "your-full-name",
	"location": "City-or-town"
}
```
# Success Response

**Code** : `201 CREATED`

```json
{
	"email": "bigby@example.com",
	"password": "your-password-will-be-salted-and-hashed-for-security"
}
```

# Error Response

**Condition** : If 'email' and 'password' combination is wrong

```json
{
 	"message": "error..."
}
```

## Login

**Auth required** : NO

* [Login] : `POST /api/auth/company/login`

**Data Example**

```json
{
	"email": "bigby@example.com",
	"password": "yourpasswordhere"
}
```

## Success Response

**Code** : `200 OK`

```json
{
	"token": "tokenwillbereallylongandhaverandomcharactes"
}
```

## Error Response

**Condition** : If 'email' and 'password' combination is wrong

**Code** : `400 Bad Request`

```json
{
 	"message": "error...with specified error message"
}
```

### User Account related

Endpoints for viewing and manipulating the Accounts that the Authenticated User
has permissions to access.

* [Show Users](API_DOCS/user/user-get.md) : `GET /api/users/`
* [Show A User](API_DOCS/user/user-get.md) : `GET /api/users/:id`
* [Update A User](API_DOCS/user/user-put.md) : `PUT /api/users/:id`
* [Delete An User](API_DOCS/user/user-delete.md) : `DELETE /api/users/:id`

### Experience in User

* [Create Experience for user](API_DOCS/user/user-experience-post.md) : `POST /api/users/:user_id/experiences`
* [Show All Experience for user](API_DOCS/user/user-experience-get.md) : `GET /api/users/:user_id/experiences`
* [Show A Experience for user](API_DOCS/user/user-experience-get.md) : `GET /api/users/:user_id/experiences/:id`
* [Update A Experience for user](API_DOCS/user/user-experience-put.md) : `PUT /api/users/:user_id/experiences/:id`
* [Delete An Experience](API_DOCS/user/user-experience-delete.md) : `DELETE /api/users/:user_id/experiences/:id`

### Interest in User

* [Create Interest for user](API_DOCS/user/user-interest-post.md) : `POST /api/users/:user_id/interests`
* [Show All Interests for user](API_DOCS/user/user-interest-get.md) : `GET /api/users/:user_id/interests`
* [Show A Interest for user](API_DOCS/user/user-interest-get.md) : `GET /api/users/:user_id/interests/:id`
* [Update A Interest for user](API_DOCS/user/user-interest-put.md) : `PUT /api/users/:user_id/interests/:id`
* [Delete An Interest](API_DOCS/user/user-interest-delete.md) : `DELETE /api/users/:user_id/interests/:id`

### Skills in User

* [Create Skill for user](API_DOCS/user/user-skill-post.md) : `POST /api/users/:user_id/skills`
* [Show All Skills for user](API_DOCS/user/user-skill-get.md) : `GET /api/users/:user_id/skills`
* [Show A Skill for user](API_DOCS/user/user-skill-get.md) : `GET /api/users/:user_id/skills/:id`
* [Update A Skill for user](API_DOCS/user/user-skill-put.md) : `PUT /api/users/:user_id/skills/:id`
* [Delete An Skill](API_DOCS/user/user-skill-delete.md) : `DELETE /api/users/:user_id/skills/:id`

### Company Account related

Endpoints for viewing and manipulating the Accounts that the Authenticated Companies
has permissions to access.

* [Show Companies](API_DOCS/company/company-get.md) : `GET /api/companies`
* [Show A Company](API_DOCS/company/company-get.md) : `GET /api/companies/:id`
* [Update A Company](API_DOCS/company/company-put.md) : `PUT /api/companies/:id`
* [Delete An Company](API_DOCS/company/company-delete.md) : `DELETE /api/companies/:id`

### Jobs in Companies

* [Create Job for company](API_DOCS/company/company-job-post.md) : `POST /api/companies/:company_id/jobs`
* [Show All Jobs for company](API_DOCS/company/company-job-get.md) : `GET /api/companies/:company_id/jobs`
* [Show A Job for company](API_DOCS/company/company-job-get.md) : `GET /api/companies/:company_id/jobs/:id`
* [Update A Job for company](API_DOCS/company/company-job-put.md) : `PUT /api/companies/:company_id/jobs/:id`
* [Delete A Job](API_DOCS/company/company-job-delete.md) : `DELETE /api/companies/:company_id/jobs/:id`
* [Show All Jobs with Type](API_DOCS/company/job-type-get.md) : `GET /api/jobs/:type`

### Jobs Skill in Companies

* [Create Job Skill for a Job](API_DOCS/company/company-job-skill-post.md) : `POST /api/companies/:company_id/jobs/:job_id/skills`
* [Show All Skills for Job](API_DOCS/company/company-job-skill-get.md) : `GET /api/companies/:company_id/jobs/:job_id/skills`
* [Show A Skill for a Job](API_DOCS/company/company-job-skill-get.md) : `GET /api/:company_id/jobs/:job_id/skills/:skill_id`
* [Update A Skill for a Job](API_DOCS/company/company-job-skill-put.md) : `PUT /api/:company_id/jobs/:job_id/skills/:skill_id`
* [Delete A Skill for a Job](API_DOCS/company/company-job-skill-delete.md) : `DELETE /api/:company_id/jobs/:job_id/skills/:skill_id`