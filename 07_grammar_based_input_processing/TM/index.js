function parseRobots(text) {
    const result = {
        agents: {},
        Sitemap: []
    };

    const lines = text.split('\n');
    let currentAgents = [];

    for (let rawLine of lines) {
        let line = rawLine.trim();

        if (!line || line.startsWith('#')) continue;

        const parts = line.split(':');
        if (parts.length < 2) continue;

        const key = parts[0].trim().toLowerCase();
        const value = parts.slice(1).join(':').trim();

        if (key === 'user-agent') {
            const agent = value.toLowerCase();

            if (!result.agents[agent]) {
                result.agents[agent] = {
                    Allow: [],
                    Disallow: []
                };
            }

            currentAgents = [agent];
        }

        else if (key === 'allow') {
            if (!value) continue;

            currentAgents.forEach(agent => {
                result.agents[agent].Allow.push(value);
            });
        }

        else if (key === 'disallow') {
            if (!value) continue;

            currentAgents.forEach(agent => {
                result.agents[agent].Disallow.push(value);
            });
        }

        else if (key === 'sitemap') {
            result.Sitemap.push(value);
        }
    }

    return result;
}

module.exports = parseRobots;