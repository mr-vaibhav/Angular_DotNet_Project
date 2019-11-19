using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ClientData.Models
{
    public class ClientDBContext :DbContext
    {
        public ClientDBContext() : base("Client") { }
        public DbSet<Client> Clients { get; set; }
        public DbSet<ClientAddress> ClientAddresses { get; set; }
    }
}