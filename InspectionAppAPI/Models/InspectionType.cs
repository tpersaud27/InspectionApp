using System.ComponentModel.DataAnnotations;

namespace InspectionAppAPI.Models
{
    public class InspectionType
    {

        // This is the primary key
        public int Id { get; set; }

        [StringLength(20)]
        public string InspectionName { get; set; } = string.Empty;


    }
}
