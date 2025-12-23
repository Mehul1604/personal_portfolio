interface PageProps {
  params: Promise<{ name: string }>;
}

const TeamDetailsPage = async ({ params }: PageProps) => {

    const {name} = await params;

    return (
        <div className="text-white text-2xl">
            <header>
                <h1>Team Details Page in About/Team. Hello {name}</h1>
            </header>
        </div>
    );
};

export default TeamDetailsPage;