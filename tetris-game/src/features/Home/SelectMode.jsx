import { useCarousel } from "@/components/ui/carousel";
import HomeLink from "./HomeLink";

const SelectMode = () => {
    const { scrollPrev, scrollNext } = useCarousel();
    return (
        <ul className="flex h-full flex-col justify-between pt-6">
            <div className="flex flex-col gap-4">
                <HomeLink to="/game">Single</HomeLink>
                <HomeLink onClick={() => scrollNext()}>Multiple</HomeLink>
            </div>
            <HomeLink onClick={() => scrollPrev()}>Back</HomeLink>
        </ul>
    );
};

export default SelectMode;
