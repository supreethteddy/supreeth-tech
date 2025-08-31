
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface TestimonialFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedIndustry: string;
  onIndustryChange: (value: string) => void;
  selectedMediaType: string;
  onMediaTypeChange: (value: string) => void;
  industries: string[];
  mediaTypes: string[];
  onClearFilters: () => void;
}

const TestimonialFilters = ({
  searchTerm,
  onSearchChange,
  selectedIndustry,
  onIndustryChange,
  selectedMediaType,
  onMediaTypeChange,
  industries,
  mediaTypes,
  onClearFilters
}: TestimonialFiltersProps) => {
  const hasActiveFilters = searchTerm || selectedIndustry !== "All" || selectedMediaType !== "All";

  return (
    <div className="glass-effect rounded-2xl p-6 mb-8 border border-white/20">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, company, or project..."
            className="w-full pl-12 pr-4 py-3 bg-white/80 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        {/* Industry Filter */}
        <Select value={selectedIndustry} onValueChange={onIndustryChange}>
          <SelectTrigger className="w-full lg:w-48 bg-white/80 border-white/30 rounded-xl backdrop-blur-sm">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map(industry => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {/* Media Type Filter */}
        <Select value={selectedMediaType} onValueChange={onMediaTypeChange}>
          <SelectTrigger className="w-full lg:w-48 bg-white/80 border-white/30 rounded-xl backdrop-blur-sm">
            <SelectValue placeholder="Media Type" />
          </SelectTrigger>
          <SelectContent>
            {mediaTypes.map(type => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={onClearFilters}
            className="bg-white/80 border-white/30 rounded-xl backdrop-blur-sm hover:bg-white/90 transition-all duration-300"
          >
            <Filter className="w-4 h-4 mr-2" />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
};

export default TestimonialFilters;
