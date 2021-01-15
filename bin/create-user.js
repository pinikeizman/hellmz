now = Date.now()
username = `user-${now}`
user = {
    id: username,
    username: "pini",
    password: '$2b$10$BMiz4lCmn23fMLM6Dn.vJOhrSk6BK1tk7XrHTDCODxvgDmPd9cc86',
    organization: "pinikeizman"
}

channels = [user.username, "organizations"]

channels.map((channel) => db[`${user.organization}_users_channels`].insert({ user_id: user.id, channel_id: channel }))
channels.map((channel) => db[`${user.organization}_channels`].insert({ id: channel, name: channel }))
db.users.insert(user);
