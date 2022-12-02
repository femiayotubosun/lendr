export interface UsersRepositoryInterface {
  create(dto: any);
  update(dto: any);
  delete(id: string);
  findById(id: string);
  findByEmail(email: string);
  find();
}
