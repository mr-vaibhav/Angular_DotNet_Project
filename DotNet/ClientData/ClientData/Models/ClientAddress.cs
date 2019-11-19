using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClientData.Models
{
    public class ClientAddress
    {
        public int Id { get; set; }
        public string Address { get; set; }

        public int ClientId { get; set; }
    }
}