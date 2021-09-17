import ToggleFeature from '../entities/ToggleFeature';
import TogglePlatform from '../entities/TogglePlatform';
import IToggleFeatureRepository from './IToggleFeatureRepository';

export default class ToggleFeatureMysqlRepository
  implements IToggleFeatureRepository
{
  private db: any;

  constructor(dbConnection: any) {
    this.db = dbConnection;
  }

  async find(feature: string): Promise<ToggleFeature> {
    const [rows] = await this.db.execute(
      'SELECT * FROM `toggle_features` WHERE `feature` = ?',
      [feature],
    );

    const rawInfo = JSON.parse(rows[0].info);
    const toggleFeature = new ToggleFeature();
    toggleFeature.id = rows[0].id;
    toggleFeature.buildFromHash(rawInfo);

    return toggleFeature;
  }

  async save(toggleFeature: ToggleFeature): Promise<ToggleFeature> {
    const [rows] = await this.db.execute(
      'INSERT INTO `toggle_features` (feature, info) values (?,?)',
      [toggleFeature.feature, toggleFeature.toString()],
    );

    const newToggleFeature = new ToggleFeature();
    newToggleFeature.buildFromHash(toggleFeature.toHash());
    newToggleFeature.id = rows.insertId;

    return newToggleFeature;
  }
}
