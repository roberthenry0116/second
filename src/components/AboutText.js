import { Grow } from "@mui/material"
export default function AboutText() {
    return (
        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0 0', padding: '10px' }}
            {...(true ? { timeout: 1000 } : {})}
        >
            <div className="w-full p-4 lg:p-20 text-xl text-center mb-10">
                `Hey there! 👋 <br></br>I'm a full-stack web wizard with a passion for
                crafting incredible user experiences. Having a strong background in
                software quality assurance and automation, I approach technical
                problems with the end user in mind. As both a one-person powerhouse
                and a Scrum team player in Agile environments, I can seamlessly
                integrate into any existing workflow and bring some serious energy to
                the table. Let me put my skills to work for you!
                When I'm not honing my software development skills, you can find me
                cruising around on my motorcycle, exploring new roads and pushing my
                limits. 🏍️`
            </div>
        </Grow>


    )
}