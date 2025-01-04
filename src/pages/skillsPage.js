import ImageCard from "../components/ImageCard";
import PieCharts from "../components/PieChart";

export default function SkillsPage() {
    return (
            <div className="block xl:flex p-2 lg:p-10">
                <ImageCard />
                <PieCharts />
            </div>
    )
}