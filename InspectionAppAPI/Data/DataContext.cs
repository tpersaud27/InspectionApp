using InspectionAppAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace InspectionAppAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        // These are the dbsets
        // DbSet represents the collection of all entities in the context, or that can eb queries from the database

        public DbSet<Inspection> Inspections { get; set; }

        public DbSet<InspectionType> InspectionTypes { get; set; }

        public DbSet<Status> Statuses { get; set; }

    }
}
