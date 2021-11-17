using FTTBlazor.Common.PokeAPI;
using Microsoft.Data.Sqlite;
using System;

namespace PokeAPI.Service
{
    public class BaseSQLite
    {
        public Pokemon GetById(int id)
        {
            Pokemon result = new Pokemon();

            try
            {
                using (var connection = new SqliteConnection("Data Source=PokeAPI.db"))
                {
                    connection.Open();

                    var command = connection.CreateCommand();
                    command.CommandText =
                    @"SELECT name
                        FROM user
                        WHERE id = $id";

                    command.Parameters.AddWithValue("$id", id);

                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            result.Name = reader.GetString(0);
                        }
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            return result;
        }
    }
}
