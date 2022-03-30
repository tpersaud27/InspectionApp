using System.ComponentModel.DataAnnotations;

namespace InspectionAppAPI.Models
{
    public class Inspection
    {
       
        public int Id { get; set; }

        [StringLength(20)]
        public string Status { get; set; } = string.Empty;

        [StringLength(200)]
        public string Comments { get; set; } = string.Empty;

        // This is the foreign key
        // This refers to the primary key of the inspection type table
        public int InspectionTypeId { get; set; }

        // This is coming from the inspection table
        public InspectionType? InspectionType { get; set; }


    }
}
